import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ohdear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOhdear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.81 9.33c2.53 0 4.6 1.99 4.6 4.44 0 2.45-2.06 4.44-4.6 4.44-2.21 0-4.07-1.52-4.5-3.54h-6.31v-1.8h6.31c0.43-2.02 2.29-3.55 4.5-3.55zm7.33-3.56v3.88c0.6-0.38 1.33-0.59 2.14-0.59 1.72 0 3.72 1.15 3.72 4.4v4.46h-1.85v-4.46c0-1.02-0.25-1.76-0.74-2.18-0.39-0.33-0.84-0.4-1.16-0.4-0.96 0-2.11 0.45-2.11 2.58v4.46h-1.85v-12.15zm-7.33 5.37c-1.5 0-2.72 1.18-2.72 2.63s1.22 2.63 2.72 2.63c1.5 0 2.72-1.18 2.72-2.63s-1.22-2.63-2.72-2.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOhdear;
