import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-t3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevT3 {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"m385.4 127 54-56.1H1.1v56z","clip-rule":"evenodd"}],["path",{"fill":"currentColor","d":"M381.4 292.6 590.7 77.2h-76.3L338.6 256.4zm162 81.6a99.6 99.6 0 0 1-194.6 30.3L341 380l-45 44.8 4.1 9.7a155.7 155.7 0 0 0 299.2-60.3c0-56.9-31-106.2-76.2-133.3l-10.7-6.3-41 41.6 18.7 9.9a100 100 0 0 1 53.2 88.1"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M205.3 516.7v-342h-56v342z","clip-rule":"evenodd"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevT3;
