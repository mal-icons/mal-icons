import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-home-max",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHomeMax {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-250h600q33 0 56.5-23.5T860-330v-290q0-33-23.5-56.5T780-700H180q-33 0-56.5 23.5T100-620v290q0 33 23.5 56.5T180-250Zm100 90v-30H180q-59 0-99.5-40.5T40-330v-290q0-59 40.5-99.5T180-760h600q59 0 99.5 40.5T920-620v290q0 59-40.5 99.5T780-190H680v30H280Zm200-315Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHomeMax;
