import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-videogame-asset-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssVideogameAssetOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m806-240-60-60h74v-360H386l-60-60h554v480h-74ZM682.82-507Q664-507 651-520.18q-13-13.18-13-32Q638-571 651.18-584q13.18-13 32-13Q702-597 715-583.82q13 13.18 13 32Q728-533 714.82-520q-13.18 13-32 13ZM394-480Zm172 0ZM80-240v-480h160l60 60H140v360h434L61-813l43-43 752 752-43 43-179-179H80Zm207-103v-104H183v-60h104v-104h60v104h104v60H347v104h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssVideogameAssetOff;
