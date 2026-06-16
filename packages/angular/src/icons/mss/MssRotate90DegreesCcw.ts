import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-rotate-90-degrees-ccw",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRotate90DegreesCcw {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M524-80q-63 0-124-18.5T292-157l42-44q42 33 89 47t101 14q122 0 209-87t87-209q0-122-87-209t-209-87h-42l84 84-44 44-158-158 158-158 44 44-84 84h42q146 0 251 105t105 251q0 73-28.5 137.5t-77 113q-48.5 48.5-113 77T524-80ZM262-220 40-442l222-222 222 222-222 222Zm0-82 136-136-136-136-136 136 136 136Zm0-136Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRotate90DegreesCcw;
