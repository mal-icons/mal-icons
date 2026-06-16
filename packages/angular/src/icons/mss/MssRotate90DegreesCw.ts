import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-rotate-90-degrees-cw",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRotate90DegreesCw {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M436-80q-73 0-137.5-28.5t-113-77q-48.5-48.5-77-113T80-436q0-146 105-251t251-105h42l-84-84 44-44 158 158-158 158-44-44 84-84h-42q-122 0-209 87t-87 209q0 122 87 209t209 87q54 0 101-14t89-47l42 44q-47 40-108 58.5T436-80Zm262-140L476-442l222-222 222 222-222 222Zm0-82 136-136-136-136-136 136 136 136Zm0-136Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRotate90DegreesCw;
