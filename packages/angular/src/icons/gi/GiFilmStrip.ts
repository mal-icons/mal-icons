import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-film-strip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFilmStrip {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M55 18v476h18v-37h46v37h274v-37h46v37h18V18h-18v37h-46V18h-18v60H137V18h-18v37H73V18H55zm18 55h46v46H73V73zm320 0h46v46h-46V73zm-256 41h238v156H137V114zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 201h46v46H73v-46zm320 0h46v46h-46v-46zM73 265h46v46H73v-46zm320 0h46v46h-46v-46zm-256 41h238v156H137V306zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 393h46v46H73v-46zm320 0h46v46h-46v-46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFilmStrip;
