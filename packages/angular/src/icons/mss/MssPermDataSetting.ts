import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-perm-data-setting",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPermDataSetting {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m80-80 800-800v410q-14-7-29-12t-31-9v-245L224-140h301q7 17 15 31.5T559-80H80Zm144-60 596-596-298 298-298 298Zm512 99-5-48q-23-7-42-18.5T656-132l-42 20-35-54 38-30q-5-19-5-41.5t5-41.5l-38-30 35-55 42 20q14-12 33-23.5t42-18.5l5-49h60l6 49q23 7 42 18.5t33 23.5l42-20 35 55-38 30q5 19 5 41.5t-5 41.5l38 30-35 54-42-20q-14 13-33 24.5T802-89l-6 48h-60Zm30-95q44 0 73-29t29-73q0-44-29-73t-73-29q-44 0-73 29t-29 73q0 44 29 73t73 29Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPermDataSetting;
