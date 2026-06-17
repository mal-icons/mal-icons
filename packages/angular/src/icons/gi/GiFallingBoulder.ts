import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-falling-boulder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFallingBoulder {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M130.81 21.79v245.95H43.84L256 489.38l212.16-221.64H381.19V21.79h-39.12v301.03c0.26 2.760.4 5.550.4 8.37 0 48.28-39.33 87.61-87.61 87.61-46.47 0-84.64-36.45-87.44-82.23h-0.29V21.79zm127.02 8.49L230.33 261.98 212.82 133.98c-3.59 63.36-25.27 134.54-25.36 196.59 0 37.12 30.29 67.41 67.41 67.41 37.12 0 67.41-30.29 67.41-67.41 0-1.94-0.1-3.85-0.26-5.75-6.33-49.76-13.55-100.75-20.41-150.92l-13.42 98.14c-0.59-0.33-1.18-0.67-1.77-0.98zm-2.96 251.57c27.03 0 48.73 21.7 48.73 48.73 0 27.03-21.71 48.73-48.73 48.73-27.03 0-48.73-21.71-48.73-48.73 0-27.03 21.71-48.73 48.73-48.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFallingBoulder;
