import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-stone-bridge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStoneBridge {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M25 265v71.11c7.53-4.42 17.73-10.28 30-16.98V265H25zm432 0v54.21c12.28 6.69 22.48 12.52 30 16.93V265h-30zm-201.490.28c-39.650.03-99.39 23.28-148.06 46.98-44.55 21.69-76.75 41.37-82.45 44.88V471h110.39c1.88-32.24 13.54-69.11 32.55-99.74 20.8-33.51 51.09-60.25 88.06-60.26 36.99-0.01 67.3 26.74 88.12 60.24 19.04 30.64 30.72 67.51 32.6 99.76H487V357.15c-5.72-3.51-38.07-23.22-82.82-44.93-48.87-23.71-108.86-46.96-148.67-46.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStoneBridge;
