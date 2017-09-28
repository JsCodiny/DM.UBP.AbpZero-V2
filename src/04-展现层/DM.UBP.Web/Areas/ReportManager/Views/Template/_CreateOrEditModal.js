﻿//------------------------------------------------------------
// All Rights Reserved , Copyright (C)  
// 版本：1.0
/// <author>
///		<name></name>
///		<date>0001/1/1 0:00:00</date>
/// </author>
//------------------------------------------------------------

(function ($) {
    app.modals.CreateOrEditModal = function () {
        var _appService = abp.services.ReportManager.reportTemplate;

        var _modalManager;
        var _$formInfo = null;

        this.init = function (modalManager) {
            _modalManager = modalManager;

            _modalManager.getModal()
                .find('#CategoryId')
                .selectpicker({
                    iconBase: "fa",
                    tickIcon: "fa fa-check"
                });

            _$formInfo = _modalManager.getModal().find('form[name=EntityOptInformationsForm]');
            _$formInfo.validate();
        };

        this.save = function () {
            if (!_$formInfo.valid()) {
                return;
            }

            var input = _$formInfo.serializeFormToObject();

            _modalManager.setBusy(true);

            if (input.Id > 0) {
                //修改
                _appService.updateReportTemplate(input)
                    .done(function () {
                        abp.notify.info(app.localize('SavedSuccessfully'));
                        _modalManager.close();
                        abp.event.trigger('app.createOrEditModalSaved');
                    }).always(function () {
                        _modalManager.setBusy(false);
                    });
            }
            else {
                //新建
                _appService.createReportTemplate(input)
                    .done(function () {
                        abp.notify.info(app.localize('SavedSuccessfully'));
                        _modalManager.close();
                        abp.event.trigger('app.createOrEditModalSaved');
                    }).always(function () {
                        _modalManager.setBusy(false);
                    });
            };
        };

    };
})(jQuery);
