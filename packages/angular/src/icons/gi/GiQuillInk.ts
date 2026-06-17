import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-quill-ink",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiQuillInk {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M496.94 14.06c-95.14 3.5-172.3 24.08-231.28 55.81l-29.47 49.28-4.97-28.09c-10.53 7.4-20.31 15.22-29.31 23.41l-14.69 45.06-5.03-25.15c-40.65 45.51-60.41 99.86-58.94 155.91 47.27-93.67 132.4-172.73 211.97-221.15l9.72 15.97c-75.31 45.84-156.39 121.2-202.19 208.25h12.16c19.78-12.02 39.16-26.86 58.41-43.44l-30.28 1.6 54.22-23.09c46.88-43.64 93.47-94.97 143.31-138.28l-24.47-5.19 56.5-21.03c26.85-20.48 54.8-37.84 84.34-49.84zM59.53 312.03v30.41H194V312.03H59.53zm20.38 49.1L47.25 389.81 24.97 474.78l14.53 15.88h177.22l14.56-15.87L209 389.81l-30.91-28.69H79.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiQuillInk;
