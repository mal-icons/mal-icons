import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-folder-shared",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFolderShared {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h341l60 60h399v580H80Zm60-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Zm299-70h320v-19q0-42-42.5-68.5T599-404q-75 0-117.5 26.5T439-309v19Zm159.92-174q30.08 0 51.58-21.42 21.5-21.42 21.5-51.5 0-30.08-21.42-51.58-21.42-21.5-51.5-21.5-30.08 0-51.58 21.42-21.5 21.42-21.5 51.5 0 30.08 21.42 51.58 21.42 21.5 51.5 21.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFolderShared;
