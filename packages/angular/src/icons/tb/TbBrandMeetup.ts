import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-meetup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandMeetup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.46 10.82c0.94 -2.16 3.05 -3.82 5.55 -3.82c2.1 0 2.84 1.92 2 4l-2 6"}],["path",{"d":"M6.98 7l-3.98 9.91"}],["path",{"d":"M13 11c0.94 -2.16 3.07 -3.8 5.42 -3.97c2.1 0 3.13 1.71 2.28 3.79l-2.45 6.09c-0.85 1.68 0.75 2.59 2.75 2.09"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandMeetup;
