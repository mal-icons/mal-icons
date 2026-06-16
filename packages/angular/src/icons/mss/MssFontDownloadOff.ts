import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-font-download-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFontDownloadOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m833-41-39-39H80v-714l-54-54 43-43L876-84l-43 43Zm-692-99h593L141-733v593Zm739-26-59-59v-595H226l-60-60h714v714ZM526-520Zm-87 85Zm189 17L528-518l-47-131h-2l-22 60-43-43 33-88h65l116 302ZM264-240l126-330 45 45-38 106h144l55 55H376l-45 124h-67Zm366 0-51-141 102 102 15 39h-66Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFontDownloadOff;
