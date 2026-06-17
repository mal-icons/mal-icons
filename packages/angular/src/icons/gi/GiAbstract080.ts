import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-080",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract080 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v218.84h59.19v-159.65h159.65v-59.19h-218.84zm251.16,0v59.19h159.8v159.65h59.04v-218.84h-218.84zm-163.03,88.13v293.75h293.75v-293.75h-293.75zm146.87,58.75c48.64,0 88.13,39.49 88.13,88.13s-39.49,88.13-88.13,88.13-88.12-39.49-88.12-88.12 39.48-88.12 88.12-88.12zm-235,104.28v218.84h218.84v-59.19h-159.65v-159.65h-59.19zm410.96,0v159.65h-159.8v59.19h218.84v-218.84h-59.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract080;
