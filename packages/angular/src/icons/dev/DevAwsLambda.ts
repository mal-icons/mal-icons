import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-aws-lambda",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAwsLambda {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-aws-lambda-2-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"M210 495h-93l103-215.3 46.6 96.1zm16.6-235.9a7.5 7.5 0 0 0-13.6 0L98.3 499.4A7.5 7.5 0 0 0 105 510h109.8c3 0 5.6-1.7 6.8-4.3L281.7 379q1.5-3.3 0-6.5zM487.5 495h-92.6L246.5 184.3a8 8 0 0 0-6.8-4.3h-60.5v-75H298l147.8 310.7a8 8 0 0 0 6.7 4.3h35zm7.5-90h-37.8L309.4 94.3a8 8 0 0 0-6.8-4.3H171.7a7.5 7.5 0 0 0-7.5 7.5v90a7.5 7.5 0 0 0 7.5 7.5H235l148.4 310.7a8 8 0 0 0 6.8 4.3H495c4.1 0 7.5-3.4 7.5-7.5v-90c0-4.1-3.4-7.5-7.5-7.5"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAwsLambda;
