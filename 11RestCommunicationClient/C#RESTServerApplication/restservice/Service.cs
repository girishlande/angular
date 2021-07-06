using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;

namespace restservice
{
    public class Service : IService
    {
        public static Controller MController = new Controller();

        public RESULT StartAirCalibrationPost(SelectionInput value)
        {
            try
            {
                Task.Run(() =>
                {
                    MController.SelectedKvListItems = value.Kvs.ToList();
                    MController.StartAirCalibration();
                });
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Air Calibration Post";
                return data;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public RESULT StartAirCalibrationSequence()
        {
            try
            {
                Task.Run(() =>
                {
                    MController.StartAirCalibrationSequence();
                });
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Air Calibration Sequence";
                return data;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public RESULT CancelAirCalibration()
        {
            try
            {
                Task.Run(() =>
                {
                    MController.CancelAirCalibrationSequence();
                });
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Cancelled Air Calibration";
                return data;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public RESULT StartWarmup()
        {
            try
            {
                Task.Run(() =>
                {
                    MController.StartWarmUp();
                });
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Warmup";
                return data;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public RESULT StartWarmupSequence()
        {
            try
            {
                Task.Run(() =>
                {
                    MController.StartWarmupSequence();
                });
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Warmup sequence";
                return data;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public RESULT CancelWarmup()
        {
            try
            {
                Task.Run(() =>
                {
                    MController.CancelWarmup();
                });
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Cancel Warmup Sequence";
                return data;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public ServiceAirCalibrationData GetDummyAirCalibrationData()
        {
            ServiceAirCalibrationData data = new ServiceAirCalibrationData
            {
                Kv = new List<string>() { "80", "100", "120", "140" },
                FocalSpot = new List<string>() { "Large", "Medium" },
                Collimation = new List<string>() { "40", "20", "10", "5" },
                Rotation = new List<string>() { "0.67", "1.0", "0.5" }
            };
            return data;
        }

        public ServiceAirCalibrationData SystemAirCalibrationData()
        {
            return MController.GetSystemAirCalibrationData();
        }

        public ServiceAirCalibrationData GetAirCalibrationData()
        {
            try
            {
                bool dummyFlag = false;
                if (dummyFlag)
                {
                    return GetDummyAirCalibrationData();
                }
                else
                {
                    return SystemAirCalibrationData();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception:" + ex.Message);
                return null;
            }
        }

        public LogMessage GetLog(string Id)
        {
            return MController.GetLogs(Id);
        }
    }
}
