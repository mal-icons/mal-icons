import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hemp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHemp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-38.35 67.12-53.71 168.71-46.1 249.69C162.11 202.53 80 160 48 144c0 44.28 61.26 134.49 125.51 185.89C122.12 316.44 48 320 16 320c27.01 27.01 99.61 54.02 157.94 66.77C142.34 396.85 123.34 427.5 96 448c49.45 0 121.08-21.4 151-49.2V496h18v-97.2C294.92 426.6 366.55 448 416 448c-27.34-20.5-46.34-51.15-77.94-61.23C396.39 374.02 468.99 347.01 496 320c-32 0-106.12-3.56-157.51 9.89C402.74 278.49 464 188.28 464 144c-48 16-114.11 58.53-161.9 121.69C309.71 184.71 294.36 83.12 256 16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHemp;
