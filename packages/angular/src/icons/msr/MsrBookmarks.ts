import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bookmarks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBookmarks {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M420-167 203-75q-30 13-56.5-5.5T120-131v-609q0-24 18-42t42-18h480q24 0 42.5 18t18.5 42v610q0 32.49-26.5 50.24Q668-62 638-75l-218-92Zm0-67 240 103v-609H180v609l240-103Zm360 104v-730H233v-60h547q24 0 42 18t18 42v730h-60ZM420-740H180h480-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBookmarks;
