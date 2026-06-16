import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-accessibility-new",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAccessibilityNew {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480.08-734q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5ZM373-80v-533q-68-5-131.5-14T120-650l15-60q85 20 169 28.5t176 8.5q92 0 176-8.5T825-710l15 60q-58 14-121.5 23T587-612.88V-80h-60v-260h-94v260h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAccessibilityNew;
