using System.ComponentModel.DataAnnotations;
using Abp.Auditing;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using DM.UBP.Domain.Entity.BaseManage.Permission;

namespace DM.UBP.Application.Dto.BaseManage.Permission.Modules
{
    [AutoMapFrom(typeof(Module))]
    public class CreateModuleInput
    {
        //[NotNullExpression]
        [Display(Name = "ID")]
        public long Id { get; set; }

        [Required]
        [Display(Name = "�ϼ�ID")]
        public int ParentId { get; set; }

        [Display(Name = "ģ�����")]
        public string ModuleCode { get; set; }

        [Display(Name = "ģ������")]
        public string ModuleName { get; set; }

        [Display(Name = "Url")]
        public string Url { get; set; }

        [Display(Name = "ͼ��")]
        public string Icon { get; set; }

        [Display(Name = "�����")]
        public int Sort { get; set; }

        [Display(Name = "˵��")]
        public string Remark { get; set; }

        [Display(Name = "״̬")]
        public bool EnabledMark { get; set; }

        [Display(Name = "�Ƿ����һ��")]
        public bool IsLast { get; set; }
    }
}