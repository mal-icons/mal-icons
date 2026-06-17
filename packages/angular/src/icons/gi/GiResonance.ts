import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-resonance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiResonance {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M258.19 21.08c-61.26-0.17-122.58 23.09-169.26 69.77-79.87 79.88-90.35 202.08-33.04 294.03-21.13-58.6-5.07-136.43 43.88-204.52-26.86 54.27-23.79 119.52 8.71 171.64-16.07-44.58-3.09-104.19 35.5-155.57-22.22 40.8-20.71 91 4.11 130.8-13.96-38.71 1.84-92.82 43.24-134.22 43.88-43.87 102.25-59.39 141.21-40.76-39.92-27.97-92.12-30.86-134.61-8.72 54.18-39.07 116.83-50.34 161.06-29.19-52.33-36.65-120.2-41.6-176.75-14.86 71.83-49.55 153.66-63.29 211.87-35.47-40.65-28.48-88.26-42.78-135.91-42.92zm135.91 42.92l0.010.01v0c0 0-0.010-0.010zm-35.12 50.33c0 0000.010.01v0c0 0-0.010-0.010zm93.77 8.32c27.83 58.21 14.09 140.05-35.47 211.89 26.74-56.55 21.8-124.42-14.86-176.75 21.14 44.24 9.88 106.9-29.2 161.07 22.15-42.49 19.25-94.7-8.71-134.62 18.62 38.96 3.11 97.33-40.77 141.2-41.4 41.4-95.51 57.2-134.22 43.24 39.81 24.82 90.02 26.33 130.83 4.1-51.38 38.6-111 51.59-155.59 35.51 52.12 32.49 117.36 35.57 171.64 8.71-68.08 48.94-145.92 65-204.51 43.87 91.95 57.32 214.16 46.84 294.03-33.04 82.99-82.99 91.95-212.25 26.84-305.18zM364.5 184.23l0-0.01h0l0.010.01zm37.91-26.46l0-0.01h0l0.010.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiResonance;
