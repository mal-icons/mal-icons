import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wikidata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWikidata {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 4.58v14.83h0.87V4.58zm1.79 0v14.83h2.65V4.58zm3.52 0v14.83H7.96V4.58zm3.55 0v14.83h0.87V4.58zm1.79 0v14.83h0.87V4.58zm1.76 0v14.83h2.65V4.58zm3.52 0v14.83h0.92V4.58zm1.79 0v14.83h2.65V4.58zm3.64 0v14.83h0.87V4.58zm1.79 0v14.83H24V4.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWikidata;
