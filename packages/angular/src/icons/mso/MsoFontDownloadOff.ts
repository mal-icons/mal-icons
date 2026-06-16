import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-font-download-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFontDownloadOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m833-41-39-39H144q-26.4 0-45.2-18.51Q80-117.01 80-143v-651l-54-54 43-43L876-84l-43 43Zm-692-99h593L141-733v593Zm739-26-59-59v-595H226l-60-60h651q25.99 0 44.49 18.8Q880-842.4 880-816v650ZM628-418 528-518l-47-131h-2l-22 60-43-43 33-88h65l116 302Zm-190-19Zm86-86Zm106 283-51-141 102 102 15 39h-66Zm-366 0 126-330 45 45-38 106h144l55 55H376.02L331-240h-67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFontDownloadOff;
