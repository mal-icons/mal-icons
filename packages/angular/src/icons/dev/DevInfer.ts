import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-infer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevInfer {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-infer-1-a)"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["path",{"fill":"currentColor","d":"M398.2 294.5H280.8V148.2c0-6.7-3.3-12.2-12.3-12.2-8.4 0-12.2 5.5-12.2 12.2v306.1c0 6.8 3.3 12.3 12.2 12.3 8.5 0 12.3-5.5 12.3-12.3V319h117.4c6.7 0 12.2-3.3 12.2-12.3 0-8.4-5.5-12.2-12.2-12.2"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevInfer;
