import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-markdown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMarkdown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.27 19.39H1.73A1.73 1.73 0 10 17.66V6.35a1.73 1.73 0 11.73-1.73h20.54A1.73 1.73 0 124 6.35v11.31a1.73 1.73 0 1-1.73 1.73zM5.77 15.92v-4.5l2.31 2.89 2.31-2.88v4.5h2.31V8.08h-2.31l-2.31 2.89-2.31-2.88H3.46v7.85zM21.23 12h-2.31V8.08h-2.31V12h-2.31l3.46 4.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMarkdown;
