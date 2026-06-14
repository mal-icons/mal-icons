import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-letterboxd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabLetterboxd {
  readonly viewBox = "0 0 640 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M521.3 128C586.9 128 640 181.1 640 246.6s-53.1 118.6-118.7 118.6c-42.5 0-79.7-22.3-100.7-55.8c11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l0 0 0.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zM320 128c42.5 0 79.7 22.3 100.7 55.8c-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l0 0-0.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0c-42.5 0-79.7-22.3-100.7-55.8c11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l0 0 0.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8c-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l0 0-0.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabLetterboxd;
