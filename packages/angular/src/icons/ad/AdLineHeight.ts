import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ad-line-height",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class AdLineHeight {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M648 160H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm272.8 546H856V318h64.8c6 0 9.4-7 5.7-11.7L825.7 178.7a7.14 7.14 0 0 0-11.3 0L713.6 306.3a7.23 7.23 0 0 0 5.7 11.7H784v388h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5a7.2 7.2 0 0 0-5.6-11.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default AdLineHeight;
