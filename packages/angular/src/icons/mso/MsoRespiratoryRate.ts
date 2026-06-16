import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-respiratory-rate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRespiratoryRate {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m597-246 63-62v-52 52l-63 62Zm184 0-61-62v-52 52l61 62ZM480-480ZM80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170H80Zm60 410q-24 0-42-18t-18-42v-170h60v170h260v60H140Zm140-130q-9 0-16-4t-12-12l-71-144H80v-60h120q7.81 0 14.9 4.5T226-493l54 106 133-266q4-8 11.38-11.5t15.5-3.5q8.12 0 15.62 3.5T467-653l87 176q-15.93 1.88-29.97 8.44Q510-462 497-452l-57-120-134 266q-3.61 8-10.83 12-7.22 4-15.17 4ZM510-40q-20.83 0-35.42-14.58Q460-69.17 460-90v-144.96L512-374q7.8-20.35 25.57-33.17Q555.33-420 577-420h83v-80h60v80h82q21.67 0 39.43 12.83Q859.2-394.35 867-374l53 139.04V-90q0 20.83-15 35.42Q890-40 870-40h-80q-20.83 0-35.42-14.58Q740-69.17 740-90v-50h60v40h60v-124l-51-136h-89v52l61 62-42 42-49-49-50 49-43-42 63-62v-52h-90l-50 136v124h60v-40h60v50.12Q640-69 625-54.5 610-40 590-40h-80Zm180-190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRespiratoryRate;
