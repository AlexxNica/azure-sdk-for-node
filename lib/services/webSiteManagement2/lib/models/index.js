/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.AppServiceCertificate = require('./appServiceCertificate');
exports.Resource = require('./resource');
exports.AppServiceCertificateResource = require('./appServiceCertificateResource');
exports.CertificateDetails = require('./certificateDetails');
exports.AppServiceCertificateOrder = require('./appServiceCertificateOrder');
exports.ProxyOnlyResource = require('./proxyOnlyResource');
exports.CertificateEmail = require('./certificateEmail');
exports.CertificateOrderAction = require('./certificateOrderAction');
exports.NameIdentifier = require('./nameIdentifier');
exports.ReissueCertificateOrderRequest = require('./reissueCertificateOrderRequest');
exports.RenewCertificateOrderRequest = require('./renewCertificateOrderRequest');
exports.SiteSeal = require('./siteSeal');
exports.SiteSealRequest = require('./siteSealRequest');
exports.Address = require('./address');
exports.Contact = require('./contact');
exports.HostName = require('./hostName');
exports.DomainPurchaseConsent = require('./domainPurchaseConsent');
exports.Domain = require('./domain');
exports.DomainAvailablilityCheckResult = require('./domainAvailablilityCheckResult');
exports.DomainControlCenterSsoRequest = require('./domainControlCenterSsoRequest');
exports.DomainOwnershipIdentifier = require('./domainOwnershipIdentifier');
exports.DomainRecommendationSearchParameters = require('./domainRecommendationSearchParameters');
exports.TldLegalAgreement = require('./tldLegalAgreement');
exports.TopLevelDomain = require('./topLevelDomain');
exports.TopLevelDomainAgreementOption = require('./topLevelDomainAgreementOption');
exports.HostingEnvironmentProfile = require('./hostingEnvironmentProfile');
exports.Certificate = require('./certificate');
exports.DeletedSite = require('./deletedSite');
exports.CsmOperationDisplay = require('./csmOperationDisplay');
exports.Dimension = require('./dimension');
exports.MetricAvailability = require('./metricAvailability');
exports.MetricSpecification = require('./metricSpecification');
exports.ServiceSpecification = require('./serviceSpecification');
exports.CsmOperationDescriptionProperties = require('./csmOperationDescriptionProperties');
exports.CsmOperationDescription = require('./csmOperationDescription');
exports.Recommendation = require('./recommendation');
exports.RecommendationRule = require('./recommendationRule');
exports.Capability = require('./capability');
exports.CsmMoveResourceEnvelope = require('./csmMoveResourceEnvelope');
exports.GeoRegion = require('./geoRegion');
exports.SkuCapacity = require('./skuCapacity');
exports.GlobalCsmSkuDescription = require('./globalCsmSkuDescription');
exports.PremierAddOnOffer = require('./premierAddOnOffer');
exports.ResourceNameAvailability = require('./resourceNameAvailability');
exports.ResourceNameAvailabilityRequest = require('./resourceNameAvailabilityRequest');
exports.SkuInfos = require('./skuInfos');
exports.SourceControl = require('./sourceControl');
exports.User = require('./user');
exports.ValidateRequest = require('./validateRequest');
exports.ValidateResponseError = require('./validateResponseError');
exports.ValidateResponse = require('./validateResponse');
exports.VnetParameters = require('./vnetParameters');
exports.VnetValidationTestFailure = require('./vnetValidationTestFailure');
exports.VnetValidationFailureDetails = require('./vnetValidationFailureDetails');
exports.ApiDefinitionInfo = require('./apiDefinitionInfo');
exports.FileSystemApplicationLogsConfig = require('./fileSystemApplicationLogsConfig');
exports.AzureTableStorageApplicationLogsConfig = require('./azureTableStorageApplicationLogsConfig');
exports.AzureBlobStorageApplicationLogsConfig = require('./azureBlobStorageApplicationLogsConfig');
exports.ApplicationLogsConfig = require('./applicationLogsConfig');
exports.AutoHealCustomAction = require('./autoHealCustomAction');
exports.AutoHealActions = require('./autoHealActions');
exports.RequestsBasedTrigger = require('./requestsBasedTrigger');
exports.StatusCodesBasedTrigger = require('./statusCodesBasedTrigger');
exports.SlowRequestsBasedTrigger = require('./slowRequestsBasedTrigger');
exports.AutoHealTriggers = require('./autoHealTriggers');
exports.AutoHealRules = require('./autoHealRules');
exports.AzureBlobStorageHttpLogsConfig = require('./azureBlobStorageHttpLogsConfig');
exports.DatabaseBackupSetting = require('./databaseBackupSetting');
exports.BackupItem = require('./backupItem');
exports.BackupSchedule = require('./backupSchedule');
exports.BackupRequest = require('./backupRequest');
exports.CloningInfo = require('./cloningInfo');
exports.ConnStringInfo = require('./connStringInfo');
exports.ConnStringValueTypePair = require('./connStringValueTypePair');
exports.ConnectionStringDictionary = require('./connectionStringDictionary');
exports.ContinuousWebJob = require('./continuousWebJob');
exports.CorsSettings = require('./corsSettings');
exports.CsmPublishingProfileOptions = require('./csmPublishingProfileOptions');
exports.CsmSlotEntity = require('./csmSlotEntity');
exports.LocalizableString = require('./localizableString');
exports.CsmUsageQuota = require('./csmUsageQuota');
exports.ErrorEntity = require('./errorEntity');
exports.CustomHostnameAnalysisResult = require('./customHostnameAnalysisResult');
exports.Deployment = require('./deployment');
exports.EnabledConfig = require('./enabledConfig');
exports.RampUpRule = require('./rampUpRule');
exports.Experiments = require('./experiments');
exports.FileSystemHttpLogsConfig = require('./fileSystemHttpLogsConfig');
exports.FunctionEnvelope = require('./functionEnvelope');
exports.FunctionSecrets = require('./functionSecrets');
exports.HandlerMapping = require('./handlerMapping');
exports.HostNameBinding = require('./hostNameBinding');
exports.HostNameSslState = require('./hostNameSslState');
exports.HttpLogsConfig = require('./httpLogsConfig');
exports.HybridConnection = require('./hybridConnection');
exports.HybridConnectionKey = require('./hybridConnectionKey');
exports.Identifier = require('./identifier');
exports.IpSecurityRestriction = require('./ipSecurityRestriction');
exports.MSDeploy = require('./mSDeploy');
exports.MSDeployLogEntry = require('./mSDeployLogEntry');
exports.MSDeployLog = require('./mSDeployLog');
exports.MSDeployStatus = require('./mSDeployStatus');
exports.MigrateMySqlRequest = require('./migrateMySqlRequest');
exports.MigrateMySqlStatus = require('./migrateMySqlStatus');
exports.NameValuePair = require('./nameValuePair');
exports.VnetRoute = require('./vnetRoute');
exports.VnetInfo = require('./vnetInfo');
exports.RelayServiceConnectionEntity = require('./relayServiceConnectionEntity');
exports.NetworkFeatures = require('./networkFeatures');
exports.Operation = require('./operation');
exports.PerfMonSample = require('./perfMonSample');
exports.PerfMonSet = require('./perfMonSet');
exports.PerfMonResponse = require('./perfMonResponse');
exports.PremierAddOn = require('./premierAddOn');
exports.ProcessThreadInfo = require('./processThreadInfo');
exports.ProcessModuleInfo = require('./processModuleInfo');
exports.ProcessInfo = require('./processInfo');
exports.PublicCertificate = require('./publicCertificate');
exports.PushSettings = require('./pushSettings');
exports.ResourceMetricName = require('./resourceMetricName');
exports.ResourceMetricProperty = require('./resourceMetricProperty');
exports.ResourceMetricValue = require('./resourceMetricValue');
exports.ResourceMetric = require('./resourceMetric');
exports.ResourceMetricAvailability = require('./resourceMetricAvailability');
exports.ResourceMetricDefinition = require('./resourceMetricDefinition');
exports.RestoreRequest = require('./restoreRequest');
exports.RestoreResponse = require('./restoreResponse');
exports.SiteMachineKey = require('./siteMachineKey');
exports.VirtualDirectory = require('./virtualDirectory');
exports.VirtualApplication = require('./virtualApplication');
exports.SiteLimits = require('./siteLimits');
exports.SiteConfig = require('./siteConfig');
exports.SnapshotRecoveryTarget = require('./snapshotRecoveryTarget');
exports.SnapshotRecoveryRequest = require('./snapshotRecoveryRequest');
exports.SlotSwapStatus = require('./slotSwapStatus');
exports.Site = require('./site');
exports.SiteAuthSettings = require('./siteAuthSettings');
exports.SiteCloneabilityCriterion = require('./siteCloneabilityCriterion');
exports.SiteCloneability = require('./siteCloneability');
exports.SiteConfigResource = require('./siteConfigResource');
exports.SiteConfigurationSnapshotInfo = require('./siteConfigurationSnapshotInfo');
exports.SiteExtensionInfo = require('./siteExtensionInfo');
exports.SiteInstance = require('./siteInstance');
exports.SiteLogsConfig = require('./siteLogsConfig');
exports.SitePhpErrorLogFlag = require('./sitePhpErrorLogFlag');
exports.SiteSourceControl = require('./siteSourceControl');
exports.SlotConfigNamesResource = require('./slotConfigNamesResource');
exports.SlotDifference = require('./slotDifference');
exports.Snapshot = require('./snapshot');
exports.StorageMigrationOptions = require('./storageMigrationOptions');
exports.StorageMigrationResponse = require('./storageMigrationResponse');
exports.StringDictionary = require('./stringDictionary');
exports.TriggeredJobRun = require('./triggeredJobRun');
exports.TriggeredJobHistory = require('./triggeredJobHistory');
exports.TriggeredWebJob = require('./triggeredWebJob');
exports.VnetGateway = require('./vnetGateway');
exports.WebJob = require('./webJob');
exports.VirtualIPMapping = require('./virtualIPMapping');
exports.AddressResponse = require('./addressResponse');
exports.VirtualNetworkProfile = require('./virtualNetworkProfile');
exports.WorkerPool = require('./workerPool');
exports.StampCapacity = require('./stampCapacity');
exports.NetworkAccessControlEntry = require('./networkAccessControlEntry');
exports.AppServiceEnvironment = require('./appServiceEnvironment');
exports.AppServiceEnvironmentResource = require('./appServiceEnvironmentResource');
exports.SkuDescription = require('./skuDescription');
exports.AppServicePlan = require('./appServicePlan');
exports.HostingEnvironmentDiagnostics = require('./hostingEnvironmentDiagnostics');
exports.MetricAvailabilily = require('./metricAvailabilily');
exports.MetricDefinition = require('./metricDefinition');
exports.SkuInfo = require('./skuInfo');
exports.Usage = require('./usage');
exports.WorkerPoolResource = require('./workerPoolResource');
exports.HybridConnectionLimits = require('./hybridConnectionLimits');
exports.AppServiceCertificateOrderCollection = require('./appServiceCertificateOrderCollection');
exports.AppServiceCertificateCollection = require('./appServiceCertificateCollection');
exports.DomainCollection = require('./domainCollection');
exports.NameIdentifierCollection = require('./nameIdentifierCollection');
exports.DomainOwnershipIdentifierCollection = require('./domainOwnershipIdentifierCollection');
exports.TopLevelDomainCollection = require('./topLevelDomainCollection');
exports.TldLegalAgreementCollection = require('./tldLegalAgreementCollection');
exports.CertificateCollection = require('./certificateCollection');
exports.DeletedWebAppCollection = require('./deletedWebAppCollection');
exports.CsmOperationCollection = require('./csmOperationCollection');
exports.SourceControlCollection = require('./sourceControlCollection');
exports.GeoRegionCollection = require('./geoRegionCollection');
exports.PremierAddOnOfferCollection = require('./premierAddOnOfferCollection');
exports.WebAppCollection = require('./webAppCollection');
exports.BackupItemCollection = require('./backupItemCollection');
exports.SiteConfigResourceCollection = require('./siteConfigResourceCollection');
exports.ContinuousWebJobCollection = require('./continuousWebJobCollection');
exports.DeploymentCollection = require('./deploymentCollection');
exports.IdentifierCollection = require('./identifierCollection');
exports.FunctionEnvelopeCollection = require('./functionEnvelopeCollection');
exports.HostNameBindingCollection = require('./hostNameBindingCollection');
exports.WebAppInstanceCollection = require('./webAppInstanceCollection');
exports.ProcessInfoCollection = require('./processInfoCollection');
exports.ProcessModuleInfoCollection = require('./processModuleInfoCollection');
exports.ProcessThreadInfoCollection = require('./processThreadInfoCollection');
exports.ResourceMetricDefinitionCollection = require('./resourceMetricDefinitionCollection');
exports.ResourceMetricCollection = require('./resourceMetricCollection');
exports.PerfMonCounterCollection = require('./perfMonCounterCollection');
exports.PublicCertificateCollection = require('./publicCertificateCollection');
exports.SiteExtensionInfoCollection = require('./siteExtensionInfoCollection');
exports.SlotDifferenceCollection = require('./slotDifferenceCollection');
exports.SnapshotCollection = require('./snapshotCollection');
exports.TriggeredWebJobCollection = require('./triggeredWebJobCollection');
exports.TriggeredJobHistoryCollection = require('./triggeredJobHistoryCollection');
exports.CsmUsageQuotaCollection = require('./csmUsageQuotaCollection');
exports.WebJobCollection = require('./webJobCollection');
exports.AppServiceEnvironmentCollection = require('./appServiceEnvironmentCollection');
exports.StampCapacityCollection = require('./stampCapacityCollection');
exports.WorkerPoolCollection = require('./workerPoolCollection');
exports.SkuInfoCollection = require('./skuInfoCollection');
exports.UsageCollection = require('./usageCollection');
exports.AppServicePlanCollection = require('./appServicePlanCollection');
exports.ResourceCollection = require('./resourceCollection');
exports.HybridConnectionCollection = require('./hybridConnectionCollection');
