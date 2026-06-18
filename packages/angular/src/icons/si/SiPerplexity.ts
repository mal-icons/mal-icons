import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-perplexity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPerplexity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.4 7.09h-2.31V0.07l-7.51 6.35V0.16h-1.16v6.2L4.49 0v7.09H1.6v10.4h2.89V24l6.93-6.36v6.2h1.16v-6.05l6.93 6.18v-6.49h2.89V7.09zm-3.47-4.53v4.53h-5.35l5.36-4.53zm-13.290.07 4.87 4.46H5.65V2.63zM2.76 16.33V8.24h7.85l-6.11 6.11v1.97H2.76zm2.89 5.04v-3.89h0v-2.65l5.78-5.78v7.01l-5.78 5.3zm12.710.02-5.78-5.15V9.06l5.78 5.78v6.56zm2.89-5.07h-1.73v-1.97L13.39 8.24h7.85v8.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPerplexity;
