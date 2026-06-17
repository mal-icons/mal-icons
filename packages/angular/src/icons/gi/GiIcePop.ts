import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ice-pop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiIcePop {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16.5c-18.8 0-37.6 3.92-50.77 10.94C192.07 34.47 185 43.25 185 55.5v239.58c0 5.29 2.81 11.4 7.41 16.01 4.6 4.62 10.67 7.4 15.84 7.4h95.52c5.17 0 11.25-2.79 15.85-7.39 4.6-4.6 7.4-10.68 7.4-15.85V55.5c0-12.25-7.07-21.04-20.23-28.06C293.6 20.42 274.8 16.5 256 16.5zm-24 320v135c0 32 48 32 48 0v-135h-48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiIcePop;
