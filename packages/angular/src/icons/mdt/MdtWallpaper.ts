import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-wallpaper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtWallpaper {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4h7V2H4c-1.1 0-2 0.9-2 2v7h2V4zm6 9-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-0.83-0.67-1.5-1.5-1.5S14 7.67 14 8.5s0.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-0.9-2-2-2zm0 18h-7v2h7c1.1 0 2-0.9 2-2v-7h-2v7zM4 13H2v7c0 1.10.9 2 2 2h7v-2H4v-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtWallpaper;
