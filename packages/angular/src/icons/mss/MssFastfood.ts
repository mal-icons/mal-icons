import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-fastfood",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFastfood {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-304q0-48 17.5-90.5t55-74q37.5-31.5 95-50t137-18.5q79.5 0 136.5 18.5t94.5 50q37.5 31.5 55 74T648-304H40ZM708-40v-60h86l57-580H453l-7-60h205v-180h60v180h209L847-40H708Zm0-60h86-86ZM575-364q-18-51-74-82t-157-31q-101 0-157 31t-75 82h463Zm-231 0ZM40-176v-60h608v60H40Zm0 136v-60h608v60H40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFastfood;
