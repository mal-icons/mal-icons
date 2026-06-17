import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spiky-eclipse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpikyEclipse {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M159.18 17.11l14.88 129.48-46.13-25.3 37.46 72.91c18.64-27 49.8-44.7 85.09-44.7 57.07 0 103.33 46.26 103.33 103.33 0 30.77-13.45 58.4-34.8 77.33l67.92 29.4-26.26-60.27 137.83-15.78-126.5-44.65 81.85-53.58H360.1L465.1 18.74 334.8 125.76l-2.98-72.93-69.95 84.83-19.35-84.83-22.32 68.46L159.18 17.12zM24.94 141.8l48.62 54.35 71.72 25.8-51.59-58.24L24.94 141.8zM147.17 254.52l-49.53 27.51 43.69 4.68-76.46 95.18 90.5-48.37-82.7 160.72 124.83-127.95 6.24 71.78 26.86-83.81c-47.03-9.16-82.65-50.22-83.44-99.74zm155.94 87.26c-12.1 7.18-25.8 11.95-40.43 13.67l75.08 136.16-34.65-149.84zM249.95 373.95h0l-11.46 59.87 19.24 60.74 12.53-63.81-20.31-56.8zm131.48 13.45l34.51 48.39 52.45 12.49v0L435.8 403.18 381.43 387.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpikyEclipse;
