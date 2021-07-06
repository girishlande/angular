using System;
using System.Collections.Generic;
using System.Text;
using System.Timers;
using MwDailyCalibration;
using MwDailyCalibration.DailyCalibrationServiceReference;

namespace restservice
{
    public class Controller
    {
        public DailyCalibration _dailyCalibration;
        public List<string> Logs;
        public Timer LogCounter;
        private double _lastTubeHeat = -1.0;

        public List<String> KvListItems { get; set; }
        public List<String> CollimationListItems { get; set; }
        public List<String> RotationListItems { get; set; }
        public List<String> FocalSpotListItems { get; set; }
        public List<String> SelectedKvListItems { get; set; }

        public Controller()
        {
            Logs = new List<string>();
            KvListItems = new List<string>();
            CollimationListItems = new List<string>();
            RotationListItems = new List<string>();
            FocalSpotListItems = new List<string>();
            SelectedKvListItems = new List<string>();

            InitialiseCalibrationObjects();
            Console.WriteLine("Service constructor called");
        }

        public LogMessage GetLogs(string logId)
        {
            int inputId = Convert.ToInt32(logId);
            int currentLogCount = Logs.Count;
            if (inputId < currentLogCount)
            {
                List<string> LogMessages = new List<string>();
                for (int i = inputId; i < currentLogCount; i++)
                    LogMessages.Add(Logs[i]);
                return new LogMessage() { Id = currentLogCount, Message = LogMessages };
            }
            return new LogMessage() { Id = inputId };
        }

        private void InitialiseCalibrationObjects()
        {
            _lastTubeHeat = -1.0;
            _dailyCalibration = new DailyCalibration();
            _dailyCalibration.OperatorActionCompleted += OnOperatorActionCompleted;
            _dailyCalibration.OperatorActionRequired += OnOperatorActionRequired;
            _dailyCalibration.WarmUpReady += OnWarmupReady;
            _dailyCalibration.EndWarmUp += OnEndWarmup;
            _dailyCalibration.AirCalibrationDataUpdated += OnAirCalibrationDataUpdated;
            _dailyCalibration.AirScanReady += OnAirScanReady;
            _dailyCalibration.EndAirScan += OnEndAirScan;
            _dailyCalibration.ScanStateChanged += OnScanStateChanged;
            _dailyCalibration.SingleAirScanCompleted += OnSingleAirScanCompleted;
            _dailyCalibration.TubeHeatChanged += OnTubeHeatChanged;

            PopulateModelMembers(_dailyCalibration.AirCalibrationDataObject);
        }

        public void CancelWarmup()
        {
            AddLogEntry("Command => CancelWamup");
            _dailyCalibration.CancelWarmupSequence();
        }

        public void StartWarmupSequence()
        {
            AddLogEntry("Command => StartWarmupSequence");
            _dailyCalibration.StartWarmupSequence();
        }

        public void StartWarmUp()
        {
            AddLogEntry("Command => StartWarmup");
            _dailyCalibration.StartWarmpup(WarmupType.ColdWarmup);
        }

        public void CancelAirCalibrationSequence()
        {
            AddLogEntry("Command => CancelAirCalibrationSequence");
            _dailyCalibration.CancelAirCalibrationSequence();
        }

        public void StartAirCalibrationSequence()
        {
            AddLogEntry("Command => StartAirCalibrationSequence");
            _dailyCalibration.StartAirCalibrationSequence();
        }

        public void StartAirCalibration()
        {
            AddLogEntry("Command => StartAirCalibration");
            AirScanInfo[] data = GetSelectedCombinations();
            _dailyCalibration.StartAirCalibration(data);
        }

        private void OnTubeHeatChanged(object sender, TubeHeatChangedEventArgs e)
        {
            _lastTubeHeat = e.TubeHeat;
            AddLogEntry("Tube heat changed:" + e.TubeHeat);
        }

        private void OnSingleAirScanCompleted(object sender, SingleAirScanCompletedArgs e)
        {
            AddLogEntry("Air scan completed. " + ScanInfoToString(e.Scandata));
        }

        public string ScanInfoToString(AirScanInfo e)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(" AirScanInfo: ");
            sb.Append("Spr :[" + e.SPR.ToString() + "] ");
            sb.Append("Collimation :[" + e.Collimation.ToString() + "] ");
            sb.Append("kV :[" + e.Kv.ToString() + "] ");
            sb.Append("FocalSpot :[" + e.FocalSpot.ToString() + "] ");
            return sb.ToString();
        }

        private void OnScanStateChanged(object sender, ScanStateChangedEventArgs e)
        {
            AddLogEntry("OnScanStateChanged:" + e.XRayOn.ToString());
        }

        private void OnEndAirScan(object sender, EndAirScanArgs e)
        {
            AddLogEntry("OnEndAirScan: Air calibration completed");
        }

        private void OnAirScanReady(object sender, DailyCalibrationEventArgs e)
        {
            AddLogEntry("System is ready for air calibration");
        }

        private void OnAirCalibrationDataUpdated(object sender, AirCalibrationDataChangedEventArgs e)
        {
            AddLogEntry("Air calibration data updated");
        }

        private void OnEndWarmup(object sender, EndWarmupEventArgs e)
        {
            AddLogEntry("Daily Calibration: EndWarmUp");
        }

        private void OnWarmupReady(object sender, DailyCalibrationEventArgs e)
        {
            AddLogEntry("Daily Calibration: Warm up Ready");
        }

        private void OnOperatorActionRequired(object sender, MwOperatorActionEventArgs e)
        {
            AddLogEntry("Operator action required:" + e.OperatorAction.ToString());
        }

        private void OnOperatorActionCompleted(object sender, MwOperatorActionEventArgs e)
        {
            AddLogEntry("Operator action Completed:");
        }

        public void AddLogEntry(string message)
        {
            Console.WriteLine(message);
            Logs.Add(message);
        }

        public ServiceAirCalibrationData GetSystemAirCalibrationData()
        {
            return PopulateModel(_dailyCalibration.AirCalibrationDataObject);
        }

        public ServiceAirCalibrationData PopulateModel(AirCalibrationData data)
        {
            ServiceAirCalibrationData serviceData = new ServiceAirCalibrationData();
            if (data == null) return serviceData;

            foreach (var kv in data.KVs)
                serviceData.Kv.Add(kv.ToString());
            foreach (var collimation in data.Collimations)
                serviceData.Collimation.Add(collimation.ToString());
            foreach (var spr in data.GantryRotations)
                serviceData.Rotation.Add(spr.ToString());
            foreach (var focalspot in data.FocalSpotSizes)
                serviceData.FocalSpot.Add(focalspot.ToString());
            return serviceData;
        }

        public void PopulateModelMembers(AirCalibrationData data)
        {
            KvListItems.Clear();
            CollimationListItems.Clear();
            RotationListItems.Clear();
            FocalSpotListItems.Clear();

            foreach (var kv in data.KVs)
                KvListItems.Add(kv.ToString());
            foreach (var collimation in data.Collimations)
                CollimationListItems.Add(collimation.ToString());
            foreach (var spr in data.GantryRotations)
                RotationListItems.Add(spr.ToString());
            foreach (var focalspot in data.FocalSpotSizes)
                FocalSpotListItems.Add(focalspot.ToString());
        }

        public AirScanInfo[] GetSelectedCombinations()
        {
            List<AirScanInfo> airScanData = new List<AirScanInfo>();
            var RotationItems = RotationListItems;
            var CollimationItems = CollimationListItems;
            var FocalSpotItems = FocalSpotListItems;

            foreach (var rotation in RotationItems)
            {
                foreach (var collimation in CollimationItems)
                {
                    foreach (var kv in SelectedKvListItems)
                    {
                        foreach (var focalspot in FocalSpotItems)
                        {
                            bool ok = Enum.TryParse(focalspot.ToString(), out FocalSpot focalSpotValue);
                            if (ok)
                            {
                                var info = new AirScanInfo()
                                {
                                    Kv = Convert.ToUInt32(kv),
                                    Collimation = Convert.ToDouble(collimation),
                                    SPR = (double)(Convert.ToDouble(rotation) / 1000.0),
                                    FocalSpot = focalSpotValue
                                };
                                airScanData.Add(info);
                            }
                        }
                    }
                }
            }

            return airScanData.ToArray();
        }
    }
}
