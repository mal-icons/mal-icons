import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-dango",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDango {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M474.2 37.8c-21.6-21.6-56.2-21.6-77.8 0-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.6-21.6 21.6-56.2 0-77.8zm-90.5 90.5a54.98 54.98 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.5-21.6 21.5-56.2 0-77.8zm-90.5 90.5a54.98 54.98 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.5-21.6 21.5-56.2 0-77.8zm-96.5 83.7L21.62 477.6l12.73 12.8L209.5 315.3c-2.5-1.9-4.7-3.8-6.8-6-2.2-2.1-4.1-4.3-6-6.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDango;
