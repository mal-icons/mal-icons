import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-kiwi-bird",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaKiwiBird {
  readonly viewBox = "0 0 576 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4l55.7 0c4.6 0 9.1-0.2 13.6-0.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1s11.2-8.3 11.2-15.3l0-240c0-70.7-57.3-128-128-128l-55.7 0c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3L96 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-46c15.3 3.9 31.4 6 48 6c5.4 0 10.7-0.2 16-0.7l0 40.7c0 13.3 10.7 24 24 24s24-10.7 24-24l0-50.9c12.4-4.4 24.2-10 35.2-16.7zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaKiwiBird;
