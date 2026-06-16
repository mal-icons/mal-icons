import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-export-notes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrExportNotes {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M778-253v84q0 6 4.5 10.5T793-154q6 0 10.5-4.5T808-169v-120q0-6-4.5-10.5T793-304H673q-6 0-10.5 4.5T658-289q0 6 4.5 10.5T673-274h84L651-168q-5 5-5 10.5t5 10.5q5 5 10.5 5t10.5-5l106-106ZM180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v329q-14-8-29.5-13t-30.5-8v-308H180v600h309q4 16 9.02 31.17Q503.05-133.65 510-120H180Zm0-107v47-600 308-4 249Zm100-82.82q0 12.83 8.63 21.33T310-280h180.6Q495-296 500-311q5-15 13-29H310q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5Zm0-170q0 12.83 8.63 21.33T310-450h314q14-7 27-11.5t29-8.5v-10q0-12-9-21t-21-9H310q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5Zm0-170q0 12.83 8.63 21.33T310-620h340q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T650-680H310q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5ZM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrExportNotes;
