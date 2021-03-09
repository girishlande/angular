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
             UriTemplate = "GetAirCalibrationData")]
        [return: MessageParameter(Name = "AirCalibrationData")]
        AirCalibrationData GetAirCalibrationData();


        [OperationContract]
        [WebInvoke(Method = "GET",
             ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             UriTemplate = "StartAirCalibration")]
        [return: MessageParameter(Name = "Data")]
        RESULT StartAirCalibration();

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

    public class AirCalibrationData {
        public List<string> Kv { get; set; }
        public List<string> FocalSpot { get; set; }
        public List<string> Collimation { get; set; }
        public List<string> Rotation { get; set; }
    }

}
