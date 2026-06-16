import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-roundabout-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRoundaboutLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M610-120v-300h30q74 0 127-52.5T820-600q0-75-52.5-127.5T640-780q-75 0-127.5 52.5T460-600v30H194l90 90-42 42L80-600l162-162 42 42-90 90h208q11-91 79.5-150.5T640-840q100 0 170 70t70 170q0 90-59.5 158.5T670-362v242h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRoundaboutLeft;
