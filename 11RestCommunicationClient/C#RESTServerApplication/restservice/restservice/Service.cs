using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace restservice
{
    public class Service : IService
    {
        public RESULT StartAirCalibration()
        {
            try
            {
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Air Calibration";
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public RESULT StartAirCalibrationSequence()
        {
            try
            {
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Air Calibration Sequence";
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public RESULT CancelAirCalibration()
        {
            try
            {
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Cancelled Air Calibration";
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public RESULT StartWarmup()
        {
            try
            {
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Warmup";
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public RESULT StartWarmupSequence()
        {
            try
            {
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Start Warmup sequence";
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public RESULT CancelWarmup()
        {
            try
            {
                RESULT data = new RESULT();
                data.ErrorCode = 0;
                data.Message = "Cancel Warmup Sequence";
                return data;
            }
            catch (Exception ex)
            {   
                return null;
            }
        }

        public AirCalibrationData GetAirCalibrationData()
        {
            try
            {
                AirCalibrationData data = new AirCalibrationData();
                data.Kv = new List<string>() { "80", "100", "120", "140" };
                data.FocalSpot = new List<string>() { "Large", "Medium" };
                data.Collimation = new List<string>() { "40", "20","10","5"};
                data.Rotation = new List<string>() { "0.67", "1.0", "0.5" };
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
