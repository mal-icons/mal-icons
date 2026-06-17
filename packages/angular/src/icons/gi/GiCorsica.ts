import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-corsica",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCorsica {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M303.6 116.9l-28.5-13.5C197 130 170 171.2 146.9 213.6l35.3 33-33.80.8 7.5 33.7 33.8 8.2-21.8 56.3 33-2.3-18.7 49.5 48.7 12.7-27.7 30.8 97.4 58.5c40.6-74 48.1-148 64.5-222-0.1-50.70.7-101.7-24.7-144.7 9.5-35.14 11-71.76-1.5-110.92l-31.5 6c-4.3 31.25-9.2 62.5-3.8 93.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCorsica;
