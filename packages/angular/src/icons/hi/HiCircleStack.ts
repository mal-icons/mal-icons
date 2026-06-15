import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-circle-stack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiCircleStack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M20.25 6.38c0 2.28-3.69 4.13-8.25 4.13S3.75 8.65 3.75 6.38m16.5 0c0-2.28-3.69-4.12-8.25-4.12S3.75 4.1 3.75 6.38m16.5 0v11.25c0 2.28-3.69 4.13-8.25 4.13s-8.25-1.85-8.25-4.12V6.38m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.15 16.56 18 12 18s-8.25-1.85-8.25-4.12v-3.75m16.5 0c0 2.28-3.69 4.13-8.25 4.13s-8.25-1.85-8.25-4.12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiCircleStack;
