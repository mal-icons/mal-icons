import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-device-reset",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDeviceReset {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5Q783-687 811.5-622T840-482q0 75-28.5 141t-78 115Q684-177 618-148.5T477-120Zm128-197L451-469v-214h60v189l137 134-43 43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDeviceReset;
