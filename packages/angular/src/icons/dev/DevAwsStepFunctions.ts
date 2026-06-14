import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-aws-step-functions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAwsStepFunctions {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-aws-step-functions-2-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"M337.5 330H495v-52.5H337.5zm165-67.5H330a7.5 7.5 0 0 0-7.5 7.5v67.5c0 4.1 3.4 7.5 7.5 7.5h172.5c4.1 0 7.5-3.4 7.5-7.5V270c0-4.1-3.4-7.5-7.5-7.5M326.3 468.8a26.3 26.3 0 1 1-52.6-0.1 26.3 26.3 0 0 1 52.6 0M105 352.5h135v-30H105zm0-75h135v-30H105zm168.8-146.2a26.3 26.3 0 1 1 52.5 0 26.3 26.3 0 0 1-52.5 0M420 397.5H180v-30h67.5c4.1 0 7.5-3.4 7.5-7.5v-45c0-4.1-3.4-7.5-7.5-7.5H180v-15h67.5c4.1 0 7.5-3.4 7.5-7.5v-45c0-4.1-3.4-7.5-7.5-7.5H180V210h240v30h15v-37.5c0-4.1-3.4-7.5-7.5-7.5h-120v-23.2a41.3 41.3 0 1 0-15 0V195h-120a7.5 7.5 0 0 0-7.5 7.5v30H97.5A7.5 7.5 0 0 0 90 240v45c0 4.1 3.4 7.5 7.5 7.5H165v15H97.5A7.5 7.5 0 0 0 90 315v45c0 4.1 3.4 7.5 7.5 7.5H165V405c0 4.1 3.4 7.5 7.5 7.5h120v15.7a41.3 41.3 0 1 0 15 0v-15.7h120c4.1 0 7.5-3.4 7.5-7.5v-37.3h-15z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAwsStepFunctions;
