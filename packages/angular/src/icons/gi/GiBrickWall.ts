import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-brick-wall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBrickWall {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M494 18.02l-101 0.1V119h101zm-119 0.12l-238 0.25V119h238zm-256 0.27L18 18.51V119h101zM18 137v110h229V137zm247 0v110h229V137zM18 265v110h101V265zm119 0v110h238V265zm256 0v110h101V265zM18 393v100.98l229-0.24V393zm247 0v100.73l229-0.24V393z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBrickWall;
