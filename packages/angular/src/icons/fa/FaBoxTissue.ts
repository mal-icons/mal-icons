import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-box-tissue",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaBoxTissue {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M92.5 0L208 0c40 0 52 24 64 48s24 48 64 48l85.2 0C436 96 448 108 448 122.8c0 3.4-0.7 6.8-1.9 10L409.6 224 384 288l-256 0-16-64L64.9 35.4c-0.6-2.3-0.9-4.6-0.9-6.9C64 12.8 76.8 0 92.5 0zM79 224l16 64-15 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 256 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-13.5 0 25.6-64 19.9 0c26.5 0 48 21.5 48 48l0 112L0 384 0 272c0-26.5 21.5-48 48-48l31 0zM0 416l512 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaBoxTissue;
