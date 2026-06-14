import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-enact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevEnact {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"fill":"currentColor","clip-path":"url(#devicon-enact-1-a)"}],["path",{"d":"m299.9 476.9-149.2-97.5v-55.1L300.1 422l-0.2-123.5-149.2-87V160L300 244l0.20.1-0.3-123.7L54 0v422l246.1 178z"}],["path",{"d":"M300.1 600 546 422.1V316.2L299.9 477zm0-178 172.5-112.7V197.9L299.9 298.5zm-0.1-178.10.20.1L546 105.8V0L299.9 120.3z","opacity":".8"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevEnact;
