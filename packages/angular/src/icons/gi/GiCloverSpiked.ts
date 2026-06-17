import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-clover-spiked",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCloverSpiked {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-24 72-72 72-72 96s48 48 72 48 72-24 72-48-48-24-72-96zM112 184c-24 0-24 48-96 72 72 24 72 72 96 72s48-48 48-72-24-72-48-72zm288 0c-24 0-48 48-48 72s24 72 48 72 24-48 96-72c-72-24-72-72-96-72zm-141.910.03A72 72 0 0 0 184 256a72 72 0 0 0 144 0 72 72 0 0 0-69.91-71.97zM256 352c-24 0-72 24-72 48s48 24 72 96c24-72 72-72 72-96s-48-48-72-48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCloverSpiked;
