import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-temple-buddhist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTempleBuddhist {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-80v-374q-50-12-83.5-48.5T40-589h61q3 33 28.29 56T189-510h51v-104q-50-12-83.5-48.5T120-749h61q3 33 28.29 56T269-670h24l187-250 187 250h24q34.43 0 59.72-23Q776-716 779-749h61q-3 50-36 86.5T720-614v104h51q34.43 0 59.72-23Q856-556 859-589h61q-3 50-36 86.5T800-454v374H530v-160q0-21.25-14.32-35.62Q501.35-290 480.18-290 459-290 444.5-275.62 430-261.25 430-240v160H160Zm208-590h224L480-819 368-670Zm-68 160h360v-100H300v100Zm-80 370h150v-100q0-45.83 32.12-77.92 32.12-32.08 78-32.08Q526-350 558-317.92q32 32.08 32 77.92v100h150v-310H220v310Zm260-310Zm0-220Zm0 160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTempleBuddhist;
