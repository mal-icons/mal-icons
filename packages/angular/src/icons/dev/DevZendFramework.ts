import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-zend-framework",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevZendFramework {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M282.2 239.5s0-79.4 79.4-79.4H600s0 79.4-79.5 79.4zm0 101.5s0-79.4 79.4-79.4h119.2s0 79.5-79.4 79.5zm0 101.6s0-79.5 79.4-79.5h39.8s0 79.5-79.5 79.5z"}],["path",{"fill":"currentColor","d":"M255.5 380.6V444H0l164.6-224.6H23.3V156h266.5L126 380.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevZendFramework;
