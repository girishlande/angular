using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace restservice
{
    [ServiceContract]
    public interface IService
    {
        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "GetLog/{Id}")]
        [return: MessageParameter(Name = "LogMessage")]
        LogMessage GetLog(string Id);

        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "GetAirCalibrationData")]
        [return: MessageParameter(Name = "AirCalibrationData")]
        ServiceAirCalibrationData GetAirCalibrationData();

        [OperationContract]
        [WebInvoke(Method = "POST",
             ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json  ,
             BodyStyle = WebMessageBodyStyle.Bare,
             UriTemplate = "/StartAirCalibrationPost")]
        [return: MessageParameter(Name = "Data")]
        RESULT StartAirCalibrationPost(SelectionInput value);

        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "StartAirCalibrationSequence")]
        [return: MessageParameter(Name = "Data")]
        RESULT StartAirCalibrationSequence();

        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "CancelAirCalibration")]
        [return: MessageParameter(Name = "Data")]
        RESULT CancelAirCalibration();

        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "StartWarmup")]
        [return: MessageParameter(Name = "Data")]
        RESULT StartWarmup();

        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "StartWarmupSequence")]
        [return: MessageParameter(Name = "Data")]
        RESULT StartWarmupSequence();

        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "CancelWarmup")]
        [return: MessageParameter(Name = "Data")]
        RESULT CancelWarmup();
    }

    
    public class RESULT {
        public int ErrorCode { get; set; }
        public string Message { get; set; }
    }

    public class SelectionInput
    {
        public string[] Kvs { get; set; }
    }

    public class ServiceAirCalibrationData {
        public List<string> Kv { get; set; }
        public List<string> FocalSpot { get; set; }
        public List<string> Collimation { get; set; }
        public List<string> Rotation { get; set; }

        public ServiceAirCalibrationData()
        {
            Kv = new List<string>();
            FocalSpot = new List<string>();
            Collimation = new List<string>();
            Rotation = new List<string>();
        }
    }

    public class LogMessage {
        public int Id { get; set; }
        public List<string> Message { get; set; }

        public LogMessage()
        {
            Id = 0;
            Message = new List<string>();
        }
    }

}
