import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-helicopter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHelicopter {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M279.27 114.41l-2.3 9.18H87v18h185.47l-7.5 30h46.05l-7.5-30H489v-18H299.03l-2.3-9.18h-17.46zM26.62 173.59l14.62 87.72-12.76 38.28H44.27l32.55-32.55L197.94 284.35l2.11 4.22c7.2 14.39 18.09 25.31 28.94 32.54C239.84 328.33 251 331.59 256 331.59h128c23 0 46.04-3.98 62.35-11.22 8.15-3.62 14.55-8.03 18.63-12.7 1.74-1.99 3.07-3.99 4.03-6.07H314.07l-48-112H259l-64 48H74.44l-32-64H26.62zm259.02 16l40.29 94h44.42l-40.29-94h-44.42zm64.20.47l40.09 93.53h79.14c-7.77-34.54-24.96-56.88-47.13-71.49-20.67-13.62-46.07-20.33-72.1-22.04zm46.53 159.19c-4.110.22-8.240.34-12.370.34h-6.49l10 30h-87.02l10-30h-18.98l-10 30H199v18h251.97l24.02-17.76 7.24-5.35-10.7-14.47-7.24 5.35-19.25 14.24h-38.54l-10.11-30.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHelicopter;
